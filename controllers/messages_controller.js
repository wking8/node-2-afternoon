
let id = 0
let messages = []

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        const { text, time } = req.body
        messages.push({ id, text, time })
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const { text } = req.body
        const updater = req.params.id
        const index = messages.findIndex(message => message.id == updater)
        messages[index] = {
            ...messages[index], text: text
        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const deleted = req.params.id
        const index = messages.findIndex(message => message.id == deleted)
        messages.splice(index, 1)
        res.status(200).send(messages)

    }
}