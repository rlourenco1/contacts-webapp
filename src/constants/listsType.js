export const ListTypes = {
    PHONE: 1,
    EMAIL: 2,
    WHATSAPP: 3
}

export const ListTypesGetDescription = (value) => {
    switch (value){
        case ListTypes.PHONE:
            return "Phone";
        case ListTypes.EMAIL:
            return "Email";
        case ListTypes.WHATSAPP:
            return "Whatsapp";
    }
}