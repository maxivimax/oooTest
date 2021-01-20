import React, { useEffect } from 'react'
import List from './Todo/List'
import Context from './context'
import Loader from './Loader'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

let a
let b

const styles = {
  mapCont: {
    height: '70vh'
  },
  butt: {
    height: '20vh',
    width: '20vh'
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
          a = jsonn.address.geo.lat
          b = jsonn.address.geo.lng

          jsonn.completed = !jsonn.completed
          if(jsonn.completed == true){
            AddCard(a, b);
          }
        }
        return jsonn
      })
    )
  }

function fetch1h(yee){
  if(yee == true){
    fetch('https://httpbin.org/post',{
     method: 'POST',
     body: "fdf",
     headers: {
     'Authorization': 'very_secret_token',
     'Content-Type': 'application/json'
    }
   })
     .then(function(response) {

         return response.json()
       }).then(function(body) {
         console.log(body);
       });
     }
}

  return (
    <div>
      <div className='wrapper'>
        {jsonn.length ? (
          <List todos={jsonn} onToggle={ toggle } />
        ) : loading ? null : (
          <p>JSON in down.....</p>
        )}
        <button onClick={fetch1h(true)} style={styles.butt} >
          Нуу
        </button>
      </div>
      <div style={styles.marg}>
        <h1>Карта(React Leaflet и Openstreetmap)</h1>
        <MapContainer style={styles.mapCont} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker style={styles.ID1} position={[-37.3159, 81.1496]}>
            <Popup>
              Leanne Graham
            </Popup>
          </Marker>
          <Marker style={styles.ID2} position={[-43.9509, -34.4618]}>
            <Popup>
              Ervin Howell
            </Popup>
          </Marker>
          <Marker style={styles.ID3} position={[-68.6102, -47.0653]}>
            <Popup>
              Clementine Bauch
            </Popup>
          </Marker>
          <Marker style={styles.ID4} position={[29.4572, -164.2990]}>
            <Popup>
              Patricia Lebsack
            </Popup>
          </Marker>
          <Marker style={styles.ID5} position={[-31.8129, 62.5342]}>
            <Popup>
              Chelsey Dietrich
            </Popup>
          </Marker>
          <Marker style={styles.ID6} position={[-71.4197, 71.7478]}>
            <Popup>
              Mrs. Dennis Schulist
            </Popup>
          </Marker>
          <Marker style={styles.ID7} position={[24.8918, 21.8984]}>
            <Popup>
              Kurtis Weissnat
            </Popup>
          </Marker>
          <Marker style={styles.ID8} position={[-14.3990, -120.7677]}>
            <Popup>
              Nicholas Runolfsdottir V
            </Popup>
          </Marker>
          <Marker style={styles.ID9} position={[24.6463, -168.8889]}>
            <Popup>
              Glenna Reichert
            </Popup>
          </Marker>
          <Marker style={styles.ID10} position={[-38.2386, 57.2232]}>
            <Popup>
              Clementina DuBuque
            </Popup>
          </Marker>

        </MapContainer>
      </div>
    </div>

  )
}

export default App
