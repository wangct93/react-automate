import React, {PureComponent} from "react";
import {getState, reduxConnect, dispatch, pathTo} from "../../../es";
import {random} from "wangct-util";

@reduxConnect(({global}) => ({
  newName:global.newName,
  data:global.data,
}))
export default class Test extends PureComponent {

  doTest(){
    dispatch({
      type:'updateField',
      field:'name',
      data:random(),
    })
  }

  doTest2(){
    dispatch({
      type:'updateField',
      field:'name',
      parentField:'data',
      data:random(),
    })
  }

  componentDidMount() {
    console.log('layoutdidi')
  }

  render() {
    return <div>
      <a onClick={() => pathTo('/test')}>测试</a>
      {this.props.children}
    </div>
  }
}
