import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    },[error, message, clearError])


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data)
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col-6">
                <h3>Сократи ссылку</h3>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={changeHandler}
                            value={form.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={changeHandler}
                            value={form.password}
                        />
                    </div>
                </div>
                <div className="d-flex">
                    <button
                        onClick={loginHandler}
                        className="btn btn-sm btn-primary mr-3"
                        disabled={loading}
                    >
                        Войти
                    </button>
                    <button
                        onClick={registerHandler}
                        className="btn btn-sm btn-dark"
                        disabled={loading}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    )
}