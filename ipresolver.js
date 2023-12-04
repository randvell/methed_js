import {listIPv4} from './ipv4.js';

const getUniqueIps = () => [...new Set(listIPv4)];

// Этот метод будет медленнее
const getUniqueIpsV2 = () => listIPv4.filter((value, index, self) =>
  self.indexOf(value) === index);

console.log(getUniqueIps());
console.log(getUniqueIpsV2());
