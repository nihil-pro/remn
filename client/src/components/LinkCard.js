import React from 'react'

export const LinkCard = ({link}) => {
    return (
        <>
            <h2>Ссылка</h2>
            <p>Сокращеннная ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Длинная ссылка: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Количество кликов: <strong>{link.clicks}</strong></p>
            <p>Дата создания: {new Date(link.date).toLocaleDateString()}</p>
        </>
    )
}