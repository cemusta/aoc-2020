import { input, sample1 } from '../src/inputs/input12';
import { part1 } from '../src/answers/answer12';
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
      // expect(calculateFinalDistance(input, WaypointMap)).toBe(part2);
    });
  });
});

describe('WaypointMap', () => {
  it('should rotate waypoint correctly', () => {
    let nav = new Navigation();
    nav.wayEW = 10;
    nav.wayNS = 1;
    nav = WaypointMap.R(90, nav);
    expect(nav.wayEW).toBe(1);
    expect(nav.wayNS).toBe(-10);
    nav = WaypointMap.R(90, nav);
    expect(nav.wayEW).toBe(-10);
    expect(nav.wayNS).toBe(-1);
    nav = WaypointMap.R(90, nav);
    expect(nav.wayEW).toBe(-1);
    expect(nav.wayNS).toBe(10);
    nav = WaypointMap.L(270, nav);
    expect(nav.wayEW).toBe(10);
    expect(nav.wayNS).toBe(1);
  });
});
