import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
    console.log(links)
    if (!links.length) {
        return <p className="text-center">Ничего нет</p>
    }
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Длинная</th>
                <th scope="col">Сокращенная</th>
                <th scope="col">Открыть</th>
            </tr>
            </thead>
            <tbody>
            { links.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>Открыть</Link>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}