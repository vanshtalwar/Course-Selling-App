export const signup = async (req, res) => {
    try {
       await res.status(200).json({ message: "Signup" })
    } catch (error) {
        res.status(400).json({ message: "error in signup controller" })

    }
}

export const login = async (req, res) => {
    try {
       await res.status(200).json({ message: "login" })
    } catch (error) {
        res.status(400).json({ message: "error in login controller" })

    }
}

export const logout = async (req, res) => {
    try {
       await res.status(200).json({ message: "logout" })
    } catch (error) {
        res.status(400).json({ message: "error in logout controller" })

    }
}