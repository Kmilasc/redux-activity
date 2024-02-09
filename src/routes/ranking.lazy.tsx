import { RankingList } from "@/components/component/ranking-list"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute('/ranking')({
  component: Ranking,
})

function Ranking() {
  return (
    <main className="px-4 pt-2">
      <RankingList />
    </main>
  )
}