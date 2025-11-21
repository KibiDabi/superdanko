"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../chart"

const data = [
  {
    average: 400,
    today: 240,
    day: "Monday",
  },
  {
    average: 300,
    today: 139,
    day: "Tuesday",
  },
  {
    average: 200,
    today: 980,
    day: "Wednesday",
  },
  {
    average: 278,
    today: 390,
    day: "Thursday",
  },
  {
    average: 189,
    today: 480,
    day: "Friday",
  },
  {
    average: 239,
    today: 380,
    day: "Saturday",
  },
  {
    average: 349,
    today: 430,
    day: "Sunday",
  },
]

const chartConfig = {
  today: {
    label: "Today",
    color: "var(--primary)",
  },
  average: {
    label: "Average",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function CardsMetric() {
  return (
    <Card>
      <CardHeader className="p-6 space-y-2">
        <CardTitle>Nutritional Trends</CardTitle>
        <CardDescription>
        Discover the nutritional benefits of SuperDanko peanut butter.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4 p-6 pt-0">
        <ChartContainer config={chartConfig} className="w-full md:h-[200px]">
          <LineChart
          accessibilityLayer
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Line
              type="monotone"
              dataKey="today"
              strokeWidth={2}
              stroke="var(--color-today)"
              dot={{
                fill: "var(--color-today)",
              }}
              activeDot={{
                r: 5,
              }}
            />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="average"
              stroke="var(--color-average)"
              strokeOpacity={0.5}
              dot={{
                fill: "var(--color-average)",
                opacity: 0.5,
              }}
              activeDot={{
                r: 5,
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}