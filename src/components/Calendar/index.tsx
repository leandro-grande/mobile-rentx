import { Feather } from "@expo/vector-icons";
import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from "react-native-calendars";
import { useTheme } from "styled-components";

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: "Hoje"
}

LocaleConfig.defaultLocale = 'pt-br'

export type DayProps = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}


export const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme();

  return (
      <CustomCalendar 
        renderArrow={( direction ) => 
          <Feather
            size={24}
            color={theme.color.text}
            name={direction === 'left' ? 'chevron-left' : 'chevron-right'}          
          />
        }

        headerStyle={{
          backgroundColor: theme.color.background_secondary,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.color.text_detail,
          paddingBottom: 10,
          marginBottom: 10
        }}

        theme={{
          textDayFontFamily: theme.font.primary_400,
          textDayHeaderFontFamily: theme.font.primary_500,
          textDayHeaderFontSize: 10,
          textMonthFontFamily: theme.font.secondary_600,
          textMonthFontSize: 20,
          monthTextColor: theme.color.title,
          arrowStyle: {
            marginHorizontal: -15,
          }
        }}

        firstDay={1}
        minDate={String(new Date())}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
      />
  )
}