export const seeCourse = async (req, res) => {
    try {
       await res.status(200).json({ message: "all courses" })
    } catch (error) {
        res.status(400).json({ message: "error in seeCourse controller" })

    }
}

export const seePuchasedCourse = async (req, res) => {
    try {
       await res.status(200).json({ message: "all Puchased Course" })
    } catch (error) {
        res.status(400).json({ message: "error in seePuchasedCourse controller" })

    }
}

export const purchaseCourse = async (req, res) => {
    try {
       await res.status(200).json({ message: "purchase Course" })
    } catch (error) {
        res.status(400).json({ message: "error in purchaseCourse controller" })

    }
}

export const createCourse = async (req, res) => {
    try {
       await res.status(200).json({ message: "create Course" })
    } catch (error) {
        res.status(400).json({ message: "error in createCourse controller" })

    }
}

export const updateCourse = async (req, res) => {
    try {
       await res.status(200).json({ message: "update Course" })
    } catch (error) {
        res.status(400).json({ message: "error in updateCourse controller" })

    }
}

export const DeleteCourse = async (req, res) => {
    try {
       await res.status(200).json({ message: "delete Course" })
    } catch (error) {
        res.status(400).json({ message: "error in DeleteCourse controller" })

    }
}