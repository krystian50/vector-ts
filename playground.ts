import vec3 from './vec3';

const v1 = new vec3([1, 2, 3]);
const v2 = new vec3([5, 6, 7]);

const v3 = vec3.cross(v1, v2);

console.log('cross', v3.x, v3.y, v3.z);
console.log('dot', vec3.dot(v1, v2));
