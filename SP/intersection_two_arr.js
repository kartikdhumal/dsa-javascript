function NumberofElementsInIntersection(a, b, n, m) {
    a = Array.from(new Set(a));
    b = new Set(b);
    return a.filter((num) => b.has(num)).length;
}