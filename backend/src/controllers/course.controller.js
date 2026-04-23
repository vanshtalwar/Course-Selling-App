export const preview = async (req, res) => {
    try {
       await res.status(200).json({ message: "all courses" })
    } catch (error) {
        res.status(400).json({ message: "error in seeCourse controller" })

    }
}


export const purchase = async (req, res) => {
    try {
       await res.status(200).json({ message: "purchase Course" })
    } catch (error) {
        res.status(400).json({ message: "error in purchaseCourse controller" })

    }
}

