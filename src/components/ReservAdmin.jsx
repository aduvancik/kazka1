import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import '../style/ReservAdmin.scss'; // Import your CSS file

const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};

export default function ReservAdmin({ isAdmin }) {
    const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
    const [reservations, setReservations] = useState(Array(8).fill(''));
    const [loading, setLoading] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        fetchReservations();
    }, [selectedDate]);

    const fetchReservations = async () => {
        setLoading(true);
        try {
            const docRef = doc(db, 'reservations', selectedDate);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data().reservations;
                const reservationsArray = Array(8).fill('').map((_, index) => data[`gazebo_${index}`] || '');
                setReservations(reservationsArray);
            } else {
                setReservations(Array(8).fill(''));
            }
        } catch (error) {
            console.error('Помилка при отриманні бронювань:', error);
        }
        setLoading(false);
    };

    const handleInputChange = (gazeboIndex, value) => {
        const newReservations = reservations.map((reservation, index) =>
            index === gazeboIndex ? value : reservation
        );
        setReservations(newReservations);
    };

    const saveReservations = async () => {
        const password = prompt('Введіть пароль для збереження бронювань:');
        if (password !== '0000') {
            alert('Неправильний пароль!');
            return;
        }
        try {
            // Transform reservations array to an object
            const reservationsObject = reservations.reduce((acc, curr, index) => {
                acc[`gazebo_${index}`] = curr;
                return acc;
            }, {});

            await setDoc(doc(db, 'reservations', selectedDate), {
                reservations: reservationsObject
            });
            alert('Бронювання успішно збережено!');
        } catch (error) {
            console.error('Помилка при збереженні бронювань:', error);
        }
    };

    const handleGazeboClick = (index) => {
        if (isAdmin) {
            setEditIndex(index);
            setEditValue(reservations[index] || ''); // Get the reservation data for editing
        }
    };

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleEditSave = () => {
        handleInputChange(editIndex, editValue); // Save the data back
        setEditIndex(null);
        setEditValue('');
    };

    // Define the order of gazebos
    const gazeboOrder = [5, 4, 6, 3, 7, 2, 8, 1];

    return (
        <div className="reservation">
            <h1>Система бронювання альтанок</h1>
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className='date'
            />
            {loading ? (
                <p>Завантаження...</p>
            ) : (
                <div className="gazebo-container">
                    {gazeboOrder.map((originalIndex, displayIndex) => (
                        <div key={originalIndex} className="gazebo-wrapper">
                            <div
                                className={`gazebo ${originalIndex === 1 || originalIndex === 8 ? 'gazebo-large' : ''}`}
                                onClick={() => handleGazeboClick(originalIndex - 1)}
                            >
                                Альтанка {originalIndex}
                            </div>
                            {isAdmin && editIndex === (originalIndex - 1) && (
                                <div className="edit-container">
                                    <textarea
                                        value={editValue}
                                        onChange={handleEditChange}
                                    />
                                    <button onClick={handleEditSave}>Зберегти</button>
                                </div>
                            )}
                            <div className="reservation-data">
                                <span
                                    className={`reservation-item ${reservations[originalIndex - 1] ? 'reserved' : 'available'}`}
                                >
                                    {reservations[originalIndex - 1] || 'Вільно'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {isAdmin && (
                <button onClick={saveReservations}>Зберегти бронювання</button>
            )}
        </div>
    );
}
