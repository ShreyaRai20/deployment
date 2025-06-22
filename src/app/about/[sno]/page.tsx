export default async function AboutSno({
    params,
  }: {
    params: Promise<{ sno: string }>
  }) {
    const { sno } = await params
    return <div>My Post: {sno}</div>
  }
