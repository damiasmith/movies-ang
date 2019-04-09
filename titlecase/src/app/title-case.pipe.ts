import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) { return null;
    }

    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      console.log('z');
      if (i > 0 && this.isPreposition(words[i])) {
        console.log('c');
        words[i] = words[i].toLowerCase();
        console.log('b');
      } else {
        words[i] = this.toTitleCase(words[i]);
      }
    }
    return words.join(' ');
}

  toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  isPreposition(word: string): boolean {
    const prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(word.toLowerCase());
  }
}
