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
import { Field, FieldContent, FieldDescription, FieldLabel } from "../field";
import { Switch } from "../switch";

export function CardsCookieSettings() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-6 space-y-1">
        <CardTitle>Ingredient Options</CardTitle>
        <CardDescription>
          Customize your peanut butter experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6 pt-0">
        <div className="flex items-start justify-between">
          <Field orientation="horizontal" className="flex flex-col space-y-1">
            <FieldContent>
              <FieldLabel htmlFor="necessary">Crunchy Peanut Butter</FieldLabel>
              <FieldDescription className="text-xs font-normal leading-snug text-muted-foreground">
                Made with whole peanuts for a satisfying crunch.
              </FieldDescription>
            </FieldContent>
          </Field>
          <div className="ml-auto">
            <Switch id="necessary" defaultChecked aria-label="Necessary" />
          </div>
        </div>

        <div className="flex items-start justify-between ">
          <Field orientation="horizontal" className="flex flex-col space-y-1">
            <FieldContent>
              <FieldLabel htmlFor="necessary">Organic Peanut Butter</FieldLabel>
              <FieldDescription className="text-xs font-normal leading-snug text-muted-foreground">
                Made with 100% organic peanuts.
              </FieldDescription>
            </FieldContent>
          </Field>
          <div className="ml-auto">
            <Switch id="necessary" defaultChecked aria-label="Necessary" />
          </div>
        </div>

        <div className="flex items-start justify-between">
          <Field orientation="horizontal" className="flex flex-col space-y-1">
            <FieldContent>
              <FieldLabel htmlFor="performance">
                Unsalted Peanut Butter
              </FieldLabel>
              <FieldDescription className="text-xs font-normal leading-snug text-muted-foreground">
                Perfect for those watching their sodium intake.
              </FieldDescription>
            </FieldContent>
          </Field>
          <div className="ml-auto">
            <Switch id="performance" aria-label="Performance" />
          </div>
        </div>

        <Field className="pt-6 p-6">
          <Button variant="outline" className="px-6 py-3 ">Save Preferences</Button>
        </Field>
      </CardContent>
    </Card>
  );
}
