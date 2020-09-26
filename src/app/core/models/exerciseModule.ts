export interface ExerciseModule {
  mainImage: {
    name: string,
    path: string
  },
  comparable: [{
      name: string,
      path: string,
      match: boolean
  }],
}
