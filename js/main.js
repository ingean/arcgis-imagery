import WebMapWrap from './components/WebMap.js'
import ActionBar from './components/ActionBar.js'
import MapTheme from './components/MapTheme.js'
import { authenticate } from './utils/OAuth2.js'

const appId = 'xG2kkVesAXGRx5t1' // AppId for arcgis-calcite-template (Dev folder at geodata.maps.arcgis.com) 
const webMapId = 'ed9c982d0d4d4dcf8415d3c46e20c4c7' // Publicly available webmap

const portal = await authenticate(appId) //Authenticate with named user using OAuth2
const webmap = new WebMapWrap(webMapId)

const actionBar = new ActionBar(webmap.view, 'layers')
const theme = new MapTheme(webmap.view) // Contains light and dark basemap