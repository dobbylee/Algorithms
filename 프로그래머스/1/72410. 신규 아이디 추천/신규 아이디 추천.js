function solution(new_id) {
    new_id = new_id.toLowerCase().replace(/[^\w-.]/g, "").replace(/[.]+/g, ".").replace(/^\.|\.$/g, "");
    if (!new_id) new_id = "a";
    if (new_id.length > 15) {
        new_id = new_id.slice(0, 15);
        if (new_id[new_id.length-1] === ".") new_id = new_id.slice(0, 14);
    }
    if (new_id.length < 3) {
        while (new_id.length < 3) {
            new_id = new_id + new_id[new_id.length-1];
        }
    }
    return new_id;
}