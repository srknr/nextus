import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const DeleteHandler = () => {
    setText('')
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p></p>
<div className="flexLayout">
      <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    店舗
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'shop',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}></option>
    <option value={10}>SG</option>
    <option value={20}>KS</option>
    <option value={30}>UW</option>
    <option value={40}>RU</option>
    <option value={50}>YH</option>
  </NativeSelect>
</FormControl>
</Box>
        

<Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    担当者
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}></option>
    <option value={10}>F</option>
    <option value={20}>HT</option>
    <option value={30}>AW</option>
    <option value={40}>SS</option>
  </NativeSelect>
</FormControl>
</Box>

<TextField  label="管理番号" variant="standard"/>
</div>


<p>
      
<Box sx={{ maxWidth: 180 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    商品状態
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}>新品未使用</option>
    <option value={10}>未使用に近い</option>
    <option value={20}>目立った傷汚れなし</option>
    <option value={30}>やや傷汚れあり</option>
    <option value={40}>傷汚れあり</option>
    <option value={50}>全体的に状態が悪い</option>

  </NativeSelect>
</FormControl>
</Box>
</p>
        
 <div className="flexLayout">
<Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    日本郵便/佐川/ヤマトでの発送
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
   
    <option value={0}></option>
    <option value={10}>ネコポス</option> 
    <option value={20}>コンパクト</option>
    <option value={30}>60</option>
    <option value={40}>80</option>
    <option value={50}>100</option>
    <option value={50}>120</option>
    <option value={60}>140</option>
    <option value={70}>160</option>
    <option value={80}>170</option>
    <option value={90}>180(佐川)</option>
    <option value={100}>200(佐川)</option>
    <option value={110}>220(佐川)</option>
    <option value={120}>240(佐川)</option>
    <option value={130}>260(佐川)</option>

  </NativeSelect>
</FormControl>
</Box>
<Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    個数
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}>1</option>
    <option value={10}>2</option>
    <option value={20}>3</option>
    <option value={30}>4</option>

  </NativeSelect>
</FormControl>
</Box>
<Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    家財便
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}></option>
    <option value={10}>S</option>
    <option value={20}>A</option>
    <option value={30}>B</option>
    <option value={40}>C</option>
    <option value={50}>D</option>
    <option value={60}>E</option>
    <option value={60}>F</option>

  </NativeSelect>
</FormControl>
</Box>
<Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    家財便
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}></option>
    <option value={10}>S</option>
    <option value={20}>A</option>
    <option value={30}>B</option>
    <option value={40}>C</option>
    <option value={50}>D</option>
    <option value={60}>E</option>
    <option value={60}>F</option>

  </NativeSelect>
</FormControl>
</Box>
<Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    家財便
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}></option>
    <option value={10}>S</option>
    <option value={20}>A</option>
    <option value={30}>B</option>
    <option value={40}>C</option>
    <option value={50}>D</option>
    <option value={60}>E</option>
    <option value={60}>F</option>

  </NativeSelect>
</FormControl>
</Box>
<Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    家財便
  </InputLabel>
  <NativeSelect
    defaultValue={0}
    inputProps={{
      name: 'maneger',
      id: 'uncontrolled-native',
    }}
  >
    <option value={0}></option>
    <option value={10}>S</option>
    <option value={20}>A</option>
    <option value={30}>B</option>
    <option value={40}>C</option>
    <option value={50}>D</option>
    <option value={60}>E</option>
    <option value={60}>F</option>

  </NativeSelect>
</FormControl>
</Box>
</div>
      <TextField
          id="standard-multiline-static"
          label="備考欄"
          value={text}
          multiline
          rows={6}
          sx={{ maxWidth: 300 }}
          variant="standard"
          onChange={(e)=> {
            setText(e.target.value)
          }}
        />
        <p>
        <Button variant="contained" onClick={DeleteHandler} size="small"
        >備考欄削除</Button>
        </p>
      </header>

    </div>
  );
}

export default App;
