import React from 'react';
import { Input, Button} from 'antd';
import store from './store/index.js';
import * as actions from './store/actionCreators';
import 'antd/dist/antd.css';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        this.handleStoreChange=this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    state={
        loading: false,
            iconLoading: false,
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    enterLoading = () => {
    this.setState({ loading: true });
    }

    enterIconLoading = () => {
    this.setState({ iconLoading: true });
    }

    fun1(e){
        const action=actions.changeone(e.target.value)
        store.dispatch(action)
    }
    fun2(e){
        const action=actions.changetwo(e.target.value)
        store.dispatch(action)
    }
    fun3(e){
        const action=actions.changethree(e.target.value)
        store.dispatch(action)
    }
    fun4(e){
        const action=actions.changefour(e.target.value)
        store.dispatch(action)
    }
    fun5(e){
        const action=actions.changefive(e.target.value)
        store.dispatch(action)
    }
    changetable(){
        const action=actions.changetables()
        store.dispatch(action)
        
    }
    render(){
        return(
            <div>   
                <div>用户名：<Input placeholder="请输入内容" onChange={this.fun1.bind(this)}/></div>
                <div>紧急度：<Input placeholder="请输入内容" onChange={this.fun2.bind(this)}/></div>
                <div>位置信息：<Input placeholder="请输入内容" onChange={this.fun3.bind(this)}/></div>
                <div>单号：<Input placeholder="请输入内容" onChange={this.fun4.bind(this)}/></div>
                <div>审批单位：<Input placeholder="请输入内容" onChange={this.fun5.bind(this)}/></div>
                
                
                <Button type="primary" onClick={this.changetable.bind(this)}>提交</Button>
                <Button>重置</Button>
                <table>
                    <tr>
                        <th>姓名</th>
                        <th>紧急情况</th>
                        <th>位置</th>
                        <th>运单号</th>
                        <th>审批单位</th>
                        
                    </tr>
                {!this.state.tg?this.state.list.map((i)=>{
                    
                        return(
                            <tr key={i.id}><td >i.username</td><tr><td >i.ed</td><td >i.ad</td><td >i.numbers</td><td >i.unit</td></tr>
                        )
                        
                    
                }):{this.state.list.map((j))={
                return(
                    {j.id==this.state.mid?{
                        <tr><td>j.username</td><tr><td >j.ed</td><td >i.ad</td><td >j.numbers</td><td >j.unit</td></tr>
                    }:""}
                )
                    }      
                    }
                }
            
                </table>
            </div>           
        )
        }
    }
    

    


export default App;