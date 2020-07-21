import React, {useContext, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)
            } catch(e) {}
        }
    }
    return (
        <div className="row">
            <div className="col-8 pt-2">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        placeholder="Вставьте ссылку"
                        type="text"
                        className="form-control"
                        id="link"
                        aria-describedby="emailHelp"
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                </div>
            </div>
        </div>
    )
}