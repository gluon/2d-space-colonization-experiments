import { Light, Dark, Custom } from './ColorPresets';

export default {
  /**
    Simulation configurations
  */

  VenationType: 'Open',     // venation can be "Open" or "Closed"
  SegmentLength: 5,         // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 200,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 5,          // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,          // initial pause/unpause state


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowSources: false,           // toggled with 's'
  ShowVeins: true,              // toggled with 'v'
  ShowVeinTips: false,          // toggled with 't'
  ShowAttractionZones: false,   // toggled with 'a'
  ShowKillZones: false,         // toggled with 'k'
  ShowInfluenceLines: false,    // toggled with 'i'
  ShowBounds: true,             // toggled with 'b'
  ShowObstacles: true,          // toggled with 'o'

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Colors
  Colors: Light,

  // Line thicknesses
  VeinThickness: 1,
  VeinTipThickness: 2,
  BoundsBorderThickness: 0
}