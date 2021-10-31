

export default function (defaultClasses, clazz) {
    if (!Array.isArray(defaultClasses)) {
        defaultClasses = defaultClasses.split(" ");
    }

    if (clazz.length > 0) {
        let classes = clazz.split(" ");

        classes.forEach((currentClasss) => {
            if (defaultClasses.indexOf(currentClasss) === -1) {
                defaultClasses.push(currentClasss);
            }
        });
    }
    return clazz = defaultClasses.join(" ");
}