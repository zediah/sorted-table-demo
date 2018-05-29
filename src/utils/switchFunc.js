export default function switchFunc(cases = {}, defaultCase = () => undefined) {
    return value => cases[value] || defaultCase(value);
}