function prettyTechStack(techStack) {
  return {
    id: techStack.id,
    logoUrl: techStack.logoUrl,
    name: techStack.name,
    description: techStack.description,
    familarity: techStack.familarity,
  };
}

export { prettyTechStack };
