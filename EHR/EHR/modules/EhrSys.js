/**
 * Created by siriushll on 2016/9/22.
 */

import React from "react"
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div id="ehrContent">
                <div className="header">
                    <span className="glyphicon glyphicon-plus"></span>
                    <div className="title">
                        <h2>电子健康记录</h2>
                        <p>Electronic Health Record</p>
                    </div>
                    <ul role="nav" className="header-nav">
                        <li><NavLink to="/about">首页</NavLink></li>
                        <li><NavLink to="/repos">医疗服务</NavLink></li>
                        <li><NavLink to="/repos">公卫服务</NavLink></li>
                    </ul>
                    <div className="style-btn">
                        <div className="btn-group self-define">
                            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                <span className="glyphicon glyphicon-folder-close"></span>
                            </button>
                            <p>风格</p>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="personalInformation.html">风格C</a></li>
                                <li><a href="personalInformationAnother.html">风格D</a></li>
                            </ul>
                        </div>
                        <div className="btn-group self-define">
                            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                <span className="glyphicon glyphicon-off"></span>
                            </button>
                            <p>退出</p>
                        </div>
                    </div>
                </div>

                {this.props.children}

                <div className="footer">this is footer</div>
            </div>
        )
    }
})
