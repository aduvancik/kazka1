import React, { useState, useEffect, useCallback } from 'react';
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
    const [reservations, setReservations] = useState({
        gazebos: Array(8).fill(''),
        tables: Array(14).fill('') // Adjusted to accommodate 14 tables
    });
    const [loading, setLoading] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [editType, setEditType] = useState(''); // 'gazebo' or 'table'

    const fetchReservations = useCallback(async () => {
        setLoading(true);
        try {
            const docRef = doc(db, 'reservations', selectedDate);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                const gazebos = Array(8).fill('').map((_, index) => data.gazebos?.[`gazebo_${index}`] || '');
                const tables = Array(14).fill('').map((_, index) => data.tables?.[`table_${index}`] || ''); // Adjusted to accommodate 14 tables
                setReservations({ gazebos, tables });
            } else {
                setReservations({
                    gazebos: Array(8).fill(''),
                    tables: Array(14).fill('') // Adjusted to accommodate 14 tables
                });
            }
        } catch (error) {
            console.error('Помилка при отриманні бронювань:', error);
        }
        setLoading(false);
    }, [selectedDate]);

    useEffect(() => {
        fetchReservations();
    }, [fetchReservations, selectedDate]);

    const handleInputChange = (type, index, value) => {
        const newReservations = { ...reservations };
        newReservations[type][index] = value;
        setReservations(newReservations);
    };

    const saveReservations = async () => {
        const password = prompt('Введіть пароль для збереження бронювань:');
        if (password !== '0000') {
            alert('Неправильний пароль!');
            return;
        }
        try {
            const gazebosObject = reservations.gazebos.reduce((acc, curr, index) => {
                acc[`gazebo_${index}`] = curr;
                return acc;
            }, {});

            const tablesObject = reservations.tables.reduce((acc, curr, index) => {
                acc[`table_${index}`] = curr;
                return acc;
            }, {});

            await setDoc(doc(db, 'reservations', selectedDate), {
                gazebos: gazebosObject,
                tables: tablesObject
            });
            alert('Бронювання успішно збережено!');
        } catch (error) {
            console.error('Помилка при збереженні бронювань:', error);
        }
    };

    const handleItemClick = (type, index) => {
        if (isAdmin) {
            setEditIndex(index);
            setEditType(type);
            setEditValue(reservations[type][index] || ''); // Get the reservation data for editing
        }
    };

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleEditSave = () => {
        handleInputChange(editType, editIndex, editValue); // Save the data back
        setEditIndex(null);
        setEditValue('');
    };

    // Define the order of gazebos and tables
    const gazeboOrder = [5, 4, 6, 3, 7, 2, 8, 1];
    const tableOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Updated to accommodate 14 tables

    // Define small tables
    const smallTables = [0, 1, 2, 3, 8, 9, 10, 11, 12]; // Adjusted to make tables 5, 6, 7, and 8 large

    return (
        <div className="reservation">
            <h1>Система бронювання альтанок і столів</h1>
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className='date'
            />
            {loading ? (
                <p>Завантаження...</p>
            ) : (
                <>
                    <div className="gazebo-container">
                        {gazeboOrder.map((originalIndex, displayIndex) => (
                            <div key={originalIndex} className="gazebo-wrapper">
                                <div
                                    className={`gazebo ${originalIndex === 1 || originalIndex === 8 ? 'gazebo-large' : ''}`}
                                    onClick={() => handleItemClick('gazebos', originalIndex - 1)}
                                >
                                    Альтанка {originalIndex}
                                </div>
                                {isAdmin && editIndex === (originalIndex - 1) && editType === 'gazebos' && (
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
                                        className={`reservation-item ${reservations.gazebos[originalIndex - 1] ? 'reserved' : 'available'}`}
                                    >
                                        {reservations.gazebos[originalIndex - 1] || 'Вільно'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="table-container">
                        {tableOrder.map((originalIndex, displayIndex) => (
                            <div key={originalIndex} className="table-wrapper">
                                <div
                                    className={`table ${smallTables.includes(originalIndex) ? 'table-small' : 'table-large'}`}
                                    onClick={() => handleItemClick('tables', originalIndex)}
                                >
                                    {smallTables.includes(originalIndex) ? 'Малий стіл' : 'Великий стіл'} {originalIndex + 1}
                                </div>
                                {isAdmin && editIndex === originalIndex && editType === 'tables' && (
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
                                        className={`reservation-item ${reservations.tables[originalIndex] ? 'reserved' : 'available'}`}
                                    >
                                        {reservations.tables[originalIndex] || 'Вільно'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
            {isAdmin && (
                <button onClick={saveReservations}>Зберегти бронювання</button>
            )}
        </div>
    );
}
