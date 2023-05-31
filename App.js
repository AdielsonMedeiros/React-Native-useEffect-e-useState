import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [ contador, setContador]= useState(0)
  const  [renderizado, setRenderizado] = useState(true)

  useEffect(()=>{
    console.log('montou')
  },[contador])



  return (
    <View style={styles.container}>
      <Button title="Aumentar" onPress ={ () => setContador(contador+1) }   />
      <Text style={{fontSize:30}}>{contador}</Text>
      <Button title="Diminuir" onPress ={ () => setContador(contador-1) }   />

      <Button title="Mostrar Nome" onPress ={ () => setRenderizado(false) }   />


      {renderizado && <Nome/> }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function Nome(){
  useEffect(()=>{
    console.log('COMPONENTE NOME FOI MONTADO')

    return ()=> console.log ('componente desmontado!')
  },[])
  return <Text>Adielson</Text>
}

