const cor = "red";

const perfectCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const AppStyle = {
    divContainer: {
        ...perfectCenter,
        backgroundColor: "lightgray",
        height: "100vh",
        width: "100vw",
        flexDirection: "column"
    },
    divDentro: {
        height: 500,
        width: 500,
        border: `2px solid ${cor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column"
    },
    titulo: {
        color: cor,
        fontSize: "30pt",
        margin: 0
    },
    timer: {
        color: cor,
        fontSize: "50pt"
    },
    botoesMaiores: {
        cursor:"pointer",
        height: 50,
        width: 100,
        border: `1px dotted ${cor}`,
        borderRadius: 25
    },
    botoesMenores: {
        cursor:"pointer",
        borderRadius: "50%",
        width: 50,
        height: 50,
        border: `1px dotted ${cor}`,
    }
      
}

export default AppStyle;