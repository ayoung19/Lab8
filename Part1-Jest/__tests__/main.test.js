const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath test', () => {
    test('level 3', () => {
        expect(formatVolumeIconPath(70)).toContain('3');
    });

    test('level 2', () => {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('level 1', () => {
        expect(formatVolumeIconPath(10)).toContain('1');
    });

    test('level 0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});
