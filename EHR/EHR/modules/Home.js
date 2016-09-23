/**
 * Created by siriushll on 2016/9/22.
 */

import React from "react"
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div id="home" className="home">
                <div className="home-header header">
                    <span className="glyphicon glyphicon-plus"></span>
                    <div className="title">
                        <h2>电子健康记录</h2>
                        <p>Electronic Health Record</p>
                    </div>
                </div>

                <div className="home-content">
                    <div className="home-form">
                        <h2>居民健康信息查询</h2>
                        <form role="form">
                            <div className="form-group">
                                <label>卡类别</label>
                                <select id="choice" className="form-control">
                                    <option>身份证号</option>
                                    <option>医保卡号</option>
                                    <option>农合卡号</option>
                                    <option>市民卡号</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>卡号</label>
                                <input type="text"/>
                            </div>
                            <div className="form-group">
                                <label>姓名</label>
                                <input type="text"/>
                            </div>
                            <button className="btn query"><NavLink to="/content">查询</NavLink></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
})
