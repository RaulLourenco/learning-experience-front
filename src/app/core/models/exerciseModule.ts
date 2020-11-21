export interface ExerciseModule {
  mainImage: {
    name: string,
    path: string,
    externalId: string
  },
  comparable: [{
      name: string,
      path: string,
      match: boolean
  }],
}
