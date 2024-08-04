const obj: Record<string, number> = {
    "a": 1,
    "b": 2,
    "c": 3

}
function swap<K extends string, V extends number>(obj: Record<K, V>): Record<V, K> {
    let res: Record<V, K> = {} as Record<V, K>;
    for (const key in obj) {
        res[obj[key]] = key;
    }
    return res;
}

