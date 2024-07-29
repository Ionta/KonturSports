function useFormatRegx(val: string, regx: RegExp, template:string) {
    // Используем регулярное выражение для вставки двоеточия
    return val.replace(regx, template);
}

export default useFormatRegx;
