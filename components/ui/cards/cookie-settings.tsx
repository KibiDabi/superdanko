"use client";

import { Button } from "../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { Label } from "../label";
import { Switch } from "../switch";

export function CardsCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingredient Options</CardTitle>
        <CardDescription>Customize your peanut butter experience.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span>Crunchy Peanut Butter</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
            Made with whole peanuts for a satisfying crunch.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Organic Peanut Butter</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
            Made with 100% organic peanuts.
            </span>
          </Label>
          <Switch id="functional" aria-label="Functional" />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Unsalted Peanut Butter</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
            Perfect for those watching their sodium intake.
            </span>
          </Label>
          <Switch id="performance" aria-label="Performance" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  );
}
