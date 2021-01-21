import React, { useEffect } from 'react'
import List from './Yeee/List'
import { MapContainer, TileLayer, Marker, Popup, LayersControl, Circle, LayerGroup, FeatureGroup, Rectangle } from 'react-leaflet'

let a
let b
let g

const position2 = [50,30];      



var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}

let sendPOST = [];

const styles = {
  mapCont: {
    height: '70vh'
  },
  butt: {
    width:'600px',
    height: '20vh'
  },
  title: {
    marginLeft: '3vh'
  },
  hrr: {
    height: '2px',
    backgroundColor: 'black',
    width: '97vw'
  },
  marg: {
    marginTop: '5vw',
    marginBottom: '3vw'
  } 
}

function App() {
  const [jsonn, setID] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setID(data)
        }, 2000)
      })
  }, [])



function AddCard(lat, lng) {
    console.log(lat)
    console.log(lng)
  }

function toggle(id) {
    setID(
      jsonn.map(jsonn => {
        if (jsonn.id === id) {
          a = Number(jsonn.address.geo.lat);
          b = Number(jsonn.address.geo.lng);

          jsonn.completed = !jsonn.completed
          if(jsonn.completed == true){
            sendPOST.push(id);

            position2.splice(0,2);
            position2.push(a);
            position2.push(b);

            console.log(position2);
            console.log(sendPOST);
            }
          if(jsonn.completed == false){
            position2.splice(0,2);
            const index = sendPOST.indexOf(id);
            if (index > -1) {
              sendPOST.splice(index, 1);
            }
            console.log(sendPOST);
          }
        }
        return jsonn
      })
    )
  }

function fetch1h(id, zip){
          g = fetch('https://httpbin.org/post',{
             method: 'POST',
             body: {
              'id': id,
              'zipcode': zip
            },
             headers: {
             'Authorization': 'very_secret_token',
             'Content-Type': 'application/json'
            }
           })
            .catch(error => {
            alert(error); // Error warning
          });
             console.log(g)
}

function sendPST(){
    setID(
      jsonn.map(jsonn => {
        if(sendPOST.some(function(person){if(person === jsonn.id){return true} }) === true){
          fetch1h(jsonn.id, jsonn.address.zipcodeS);
        }
        return jsonn
      })
    )  
}

  return (
    <div>
      <h1 style={styles.title}>Тест по ReactJS</h1>
      <div className='wrapper'>
        {jsonn.length ? (
          <List todos={jsonn} onToggle={ toggle } />
        ) : loading ? null : (
          <p>JSON in down.....</p>
        )}
        <button style={styles.butt} onClick={sendPST}>
          Нуууу... Это кнопка для отправки POST запроса серверу.😊
        </button>
      </div>
      <br />
      <hr style={styles.hrr} />
      <div style={styles.marg}>
        <h1 style={styles.title}>Карта(React Leaflet и Openstreetmap)</h1>
        <MapContainer style={styles.mapCont} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors  |  <a href="http://vk.com/maxivimax">Maxivimax</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position2} />
        </MapContainer>
      </div>
    </div>

  )
}

export default App