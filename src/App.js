import React, { useEffect } from 'react'
import List from './Yeee/List'
import { MapContainer, TileLayer, Marker, Popup, LayersControl, Circle, LayerGroup, FeatureGroup, Rectangle } from 'react-leaflet'

let a
let b

let g

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

function fetch1h(id){
    g = fetch('https://httpbin.org/post',{
     method: 'POST',
     body: {
      'id': id,
      'zipcode': 'application/json'
    },
     headers: {
     'Authorization': 'very_secret_token',
     'Content-Type': 'application/json'
    }
   })
    .catch(error => {
    alert(error); // Error: Not Found
  });
     console.log(g)

     
}

  return (
    <div>
      <div className='wrapper'>
        {jsonn.length ? (
          <List todos={jsonn} onToggle={ toggle } />
        ) : loading ? null : (
          <p>JSON in down.....</p>
        )}
      </div>
      <div style={styles.marg}>
        <h1>Карта(React Leaflet и Openstreetmap)</h1>
        <MapContainer style={styles.mapCont} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
<LayersControl position="topright">
      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="𝟏 | Leanne Graham">
        <Marker position={[-37.3159, 81.1496]}>
            <Popup>
              Leanne Graham
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟐 | Ervin Howell">
        <Marker position={[-43.9509, -34.4618]}>
            <Popup>
              Ervin Howell
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟑 | Clementine Bauch">
          <Marker position={[-68.6102, -47.0653]}>
            <Popup>
              Clementine Bauch
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟒 | Patricia Lebsack">
          <Marker position={[29.4572, -164.2990]}>
            <Popup>
              Patricia Lebsack
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟓 | Chelsey Dietrich">
          <Marker position={[-31.8129, 62.5342]}>
            <Popup>
              Chelsey Dietrich
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟔 | Mrs. Dennis Schulist">
          <Marker position={[-71.4197, 71.7478]}>
            <Popup>
              Mrs. Dennis Schulist
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟕 | Kurtis Weissnat">
          <Marker position={[24.8918, 21.8984]}>
            <Popup>
              Kurtis Weissnat
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟖 | Nicholas Runolfsdottir V">
          <Marker position={[-14.3990, -120.7677]}>
            <Popup>
              Nicholas Runolfsdottir V
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟗 | Glenna Reichert">
          <Marker position={[24.6463, -168.8889]}>
            <Popup>
              Glenna Reichert
            </Popup>
          </Marker>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="𝟏𝟎 | Clementina DuBuque">
          <Marker position={[-38.2386, 57.2232]}>
            <Popup>
              Clementina DuBuque
            </Popup>
          </Marker>
      </LayersControl.Overlay>

    </LayersControl>

        </MapContainer>
      </div>
    </div>

  )
}

export default App