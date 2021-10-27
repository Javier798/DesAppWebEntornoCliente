function permite(evento, permitido, elemento, numCaracteres) {
    if (elemento.value.length == numCaracteres) {
        return false;
    }

    switch (permitido) {
        case "num":
            if (!/[0-9]/.test(evento.key)) {
                return false;
            }
            break;
        case "car":
            if (!/[a-zA-Z]/.test(evento.key)) {
                return false;
            }
            break;
        case "num_car":
            if (!/[a-zA-Z0-9]/.test(evento.key)) {
                return false;
            }
            break;
        default:
            return true;
    }
}

