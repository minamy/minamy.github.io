<?php
	$input = json_decode(file_get_contents("php://input"));
	$request = $input->value;
	$output = fopen('php://output', 'w');

	if ($request == "predict"){
		$originalData = $input->people;
		$timeStamp = $input->time;
		$modifiedData = modifyData($originalData, $timeStamp);
		$predictedData = predictData($modifiedData);
		$nt = array();
		for ($i = 0; $i < sizeof($predictedData); $i+=1){
			$nt[$i] = $timeStamp[sizeof($timeStamp)-1] + ($i+1)*5;
		}
		$array = array();
		$array[0] = $nt;
		$array[1] = $predictedData;
		
		fwrite($output, json_encode($array));
	}
	fclose($output);

	function modifyData($s, $t){
		$n = array();
		$i = 0;
		$j = 0;
		$k = $t[0];
		while ($k < $t[sizeof($t)-1]){
			$last = $s[$j];
			$next = $s[$j+1];
			$dif = $t[$j+1]-$t[$j];
			if ($dif == 0){
				$j+=1;
				echo "fuck";
			} else {
				$prog = $k-$t[$j];
				$n[$i] = $last * (($dif - $prog) / $dif) + $next * ($prog / $dif);
				$k += 5;
				while ($j < sizeof($t)-2 && $k > $t[$j+1]){
					$j += 1;
				}
				$i += 1;
			}
		}
		return $n;
	}

	function predictData($s){
		$p = array();
		$l = sizeof($s);
		if ($l >= 2016*4){
			for ($i = 0; $i < 2016; $i+=1){
				$p[$i] = 0;
				$p[$i] += $s[$l + $i - 2016 * 1];
				$p[$i] += $s[$l + $i - 2016 * 2];
				$p[$i] += $s[$l + $i - 2016 * 3];
				$p[$i] += $s[$l + $i - 2016 * 4];
				$p[$i] /= 4;
			}
		} else{
			$p = $s;
		}
		return $p;
	}
?>