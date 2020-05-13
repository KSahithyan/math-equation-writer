export interface ButtonObj {
    /**
     * text to be shown in the button
     */
    text: string,
    /**
     * value to be added in the LaTeX text
     */
    value: string,
    /**
     * function to be called when button pressed
     */
    callback?: Function,
    /** 
     * description of the box
     */
    description?: string
}

export interface Section {
    title: string,
    buttonSection: ButtonObj[][]
}