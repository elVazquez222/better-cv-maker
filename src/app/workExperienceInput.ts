interface Skill {
  name: string,
  color: string
}

export interface WorkExperienceInput {
  type: string,
  time: string, //unique
  title: string,
  description: string,
  appliedSkills: Array<Skill>
}
