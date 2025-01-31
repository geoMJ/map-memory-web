#!/usr/bin/bash

for file in src/components/ui/*.tsx; do 
  filename=$(basename "$file" .tsx)
  
  # This is a component made by someone on github so we ignore it
  if [ "$filename" == "typography" ]; then
    echo "Skipping $filename"
    continue
  fi

  # Update the components
  pnpm dlx shadcn@latest add -y -o "$filename"
done
