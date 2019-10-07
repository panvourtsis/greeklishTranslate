/**
 * Created by panagiotisvourtsis
 */
(function(window) {
	"use strict";

	function greeklishTranslate(s) {
		var translateMap = {
			ks: "ξ",
			ps: "ψ",
			th: "θ",
			a: "α",
			a: "ά",
			b: "β",
			c: "σ",
			d: "δ",
			e: "έ",
			e: "ε",
			f: "φ",
			g: "γ",
			h: "ή",
			h: "η",
			i: "ί",
			i: "ι",
			k: "κ",
			l: "λ",
			m: "μ",
			n: "ν",
			o: "ό",
			o: "ο",
			p: "π",
			q: "",
			r: "ρ",
			s: "σ",
			t: "τ",
			u: "ύ",
			u: "υ",
			v: "β",
			w: "ω",
			x: "χ",
			y: "ύ",
			y: "υ",
			z: "ζ",
			KS: "Ξ",
			PS: "Ψ",
			TH: "Θ",
			A: "Ά",
			A: "Α",
			B: "Β",
			C: "Σ",
			D: "Δ",
			E: "Έ",
			E: "Ε",
			F: "Φ",
			G: "Γ",
			H: "Ή",
			H: "Η",
			I: "Ί",
			I: "Ι",
			K: "Κ",
			L: "Λ",
			M: "Μ",
			N: "Ν",
			O: "Ό",
			O: "Ο",
			P: "Π",
			R: "Ρ",
			S: "Σ",
			T: "Τ",
			U: "Ύ",
			U: "Υ",
			V: "Β",
			W: "Ώ",
			W: "Ω",
			X: "Χ",
			Y: "Ύ",
			Y: "Υ",
			Z: "Ζ"
		};

		var newText = "";
		for (var x = 0; x < s.length; x++) {
			if (translateMap[s.charAt(x - 1) + s.charAt(x)] && x > 0) {
				//special case
				newText = newText.substr(0, newText.length - 1);
				newText += translateMap[s.charAt(x - 1) + s.charAt(x)] || s.charAt(x);
			} else {
				newText += translateMap[s.charAt(x)] || s.charAt(x);
			}
		}

		return newText;
	}

	window.greeklishTranslate = greeklishTranslate;
})(window);
