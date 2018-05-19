import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'
import './App.css';

class App extends Component {
  state = {editorState: EditorState.createEmpty()};
  onChange = editorState => {this.setState({editorState})};

  _onClick = (e) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, e.target.name));
  }

  render() {
    const styles = [
      'BOLD',
      'ITALIC',
      'UNDERLINE',
      'CODE'
    ]
    const buttons = styles.map(style => {
      return <button key={style} onClick={this._onClick} name={style}>{style}</button>
    })
    return (
      <div className="App">
        <h1>My Editor</h1>
        <div className='toolbar'>
          {buttons}
        </div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          />
      </div>
    );
  }
}

export default App;
