import { input, sample1 } from '../src/inputs/input12';
import { part1, part2 } from '../src/answers/answer12';
import {
  calculateFinalDistance, Navigation, NavigationMap, WaypointMap,
} from '../src/day12';

describe('calculateFinalDistance', () => {
  describe('with NavigationMap', () => {
    it('should find calculations', () => {
      expect(calculateFinalDistance(sample1, NavigationMap)).toBe(25);
      expect(calculateFinalDistance(input, NavigationMap)).toBe(part1);
    });
  });

  describe('with WaypointMap', () => {
    it('should find calculations', () => {
      expect(calculateFinalDistance(sample1, WaypointMap)).toBe(286);
      expect(calculateFinalDistance(input, WaypointMap)).toBe(part2);
    });
  });
});

describe('WaypointMap', () => {
  it('should rotate waypoint correctly - r90', () => {
    let nav = new Navigation();
    nav.wayEW = 3;
    nav.wayNS = 2;
    nav = WaypointMap.R(90, nav);
    expect(nav.wayEW).toBe(2);
    expect(nav.wayNS).toBe(-3);
  });

  it('should rotate waypoint correctly - r180', () => {
    let nav = new Navigation();
    nav.wayEW = 3;
    nav.wayNS = 2;
    nav = WaypointMap.R(180, nav);
    expect(nav.wayEW).toBe(-3);
    expect(nav.wayNS).toBe(-2);
  });

  it('should rotate waypoint correctly - r270', () => {
    let nav = new Navigation();
    nav.wayEW = 3;
    nav.wayNS = 2;
    nav = WaypointMap.R(270, nav);
    expect(nav.wayEW).toBe(-2);
    expect(nav.wayNS).toBe(3);
  });

  it('should rotate waypoint correctly - r360', () => {
    let nav = new Navigation();
    nav.wayEW = 3;
    nav.wayNS = 2;
    nav = WaypointMap.R(360, nav);
    expect(nav.wayEW).toBe(3);
    expect(nav.wayNS).toBe(2);
  });

  it('should rotate waypoint correctly - L90', () => {
    let nav = new Navigation();
    nav.wayEW = 3; // X
    nav.wayNS = 2; // Y
    nav = WaypointMap.L(90, nav);
    expect(nav.wayEW).toBe(-2);
    expect(nav.wayNS).toBe(3);
  });

  it('should rotate waypoint correctly - L180', () => {
    let nav = new Navigation();
    nav.wayEW = 3;
    nav.wayNS = 2;
    nav = WaypointMap.L(180, nav);
    expect(nav.wayEW).toBe(-3);
    expect(nav.wayNS).toBe(-2);
  });

  it('should rotate waypoint correctly - L270', () => {
    let nav = new Navigation();
    nav.wayEW = 3;
    nav.wayNS = 2;
    nav = WaypointMap.L(270, nav);
    expect(nav.wayEW).toBe(2);
    expect(nav.wayNS).toBe(-3);
  });

  it('should rotate waypoint correctly - L360', () => {
    let nav = new Navigation();
    nav.wayEW = 3;
    nav.wayNS = 2;
    nav = WaypointMap.L(360, nav);
    expect(nav.wayEW).toBe(3);
    expect(nav.wayNS).toBe(2);
  });
});
