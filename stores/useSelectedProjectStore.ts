import { defineStore } from 'pinia'
import type { Project } from '~/types/Project';

export const useSelectedProjectStore  = defineStore('selectedProject',{
state:() => ({
    selected: null as Project | null 
}),
actions: {
    setProject(project: Project) {
        this.selected = project
    },
    clearProject() {
        this.selected = null
    },
    isSelectedTechnology(techName: string): boolean {
        // console.log(techSrc)
        return this.selected?.techName.includes(techName) ?? false
      }
},
getters: {
    isAnyTechnologySelected(state): boolean {
        return Array.isArray(state.selected?.techName) && state.selected.techName.length > 0
    }
}

})