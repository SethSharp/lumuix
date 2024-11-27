<script setup lang="ts">
import { Button } from '@/components/button'
import { Input } from '@/components/inputs'
import { Label } from '@/components/form'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline"> Open </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="grid gap-4 py-4">
        <div>
          <Label
            for="name"
            class="text-right">
            Name
          </Label>
          <Input
            id="name"
            value="Pedro Duarte"
            class="col-span-3" />
        </div>
        <div>
          <Label
            for="username"
            class="text-right">
            Username
          </Label>
          <Input
            id="username"
            value="@peduarte"
            class="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit"> Save changes </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
