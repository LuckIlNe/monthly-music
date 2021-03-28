import fs from 'fs'
import path from 'path'


const playlistsDirectory = path.join(process.cwd(), 'playlists')

export function getAllMonthsName() {
    const fileNames = fs.readdirSync(playlistsDirectory + '\\monthly')
    const allMonths = fileNames.map(fileName => {
        const id = fileName.replace(/\.js$/, '')

        return {
            id: id
        }
    })
    console.log(allMonths)
    return allMonths
}


export function getAllMonths() {
    const fileNames = fs.readdirSync(playlistsDirectory + '\\monthly')
    const allMonths = fileNames.map(fileName => {
        const id = fileName.replace(/\.js$/, '')

        return {
            params: {id: id}
        }
    })
    return allMonths
}

export function getMonthData(id) {
    console.log(id)
    const playlists = require(`../playlists/monthly/${id}.js`).playlists
    
    return {
        id, 
        data: playlists
    }
}